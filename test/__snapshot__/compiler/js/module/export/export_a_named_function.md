# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export function f(){}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "export function f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 15,
                    "end": 17
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 19
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 6,
                "end": 21
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

