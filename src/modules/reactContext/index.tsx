import React from "react"

const ThemeContext = React.createContext("light")

class App extends React.Component {
    render() {
        // 使用provider将 theme传递给 以下组件树
        // 子组件都能访问到theme的值
        return <ThemeContext.Provider value="dark">
            <Toobar />
        </ThemeContext.Provider>
    }
}

function Toobar() {
    return <div>
        <ThemedButton />
    </div>
}

class ThemedButton extends React.Component {
    // 指定当前 contextType 读取theme context
    // react会向上知道最近的theme Provider，使用它的值
    
    static contextType = ThemeContext
    render() {
        return <Button theme={this.context} />
    }
}

function Button(p) {
    return <button></button>
}