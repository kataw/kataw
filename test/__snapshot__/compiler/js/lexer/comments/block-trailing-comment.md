# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
{
    a();
    //comment
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{\n    a();\n    //comment\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 7
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "symbol": null,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 10
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

