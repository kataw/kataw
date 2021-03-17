# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
</>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "</>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": {
                    "kind": 134226153,
                    "typeParameterList": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 1,
                    "end": 1
                },
                "parameters": {
                    "kind": 131322,
                    "text": "",
                    "flags": 3,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "contents": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        "operator": "/",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "operator": ">",
                    "right": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'>' expected.",
            "start": 1,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 2,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

