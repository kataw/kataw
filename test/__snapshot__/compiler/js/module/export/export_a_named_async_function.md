# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export async function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export async function f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 21,
                    "end": 23
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 25
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "typeParameters": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 260,
                "start": 6,
                "end": 27
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

