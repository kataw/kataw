# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default function () {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default function () {}",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 264284,
                "name": null,
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 26
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
                        "start": 28,
                        "end": 28
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 29
                },
                "typeParameters": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 256,
                "start": 14,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
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
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

