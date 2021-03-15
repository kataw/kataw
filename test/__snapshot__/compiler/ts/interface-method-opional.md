# Kataw parser test case

## Input

`````js
interface I {
    m?(): void;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface I {\n    m?(): void;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "I",
                "rawText": "I",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8339,
                        "name": {
                            "kind": 196711,
                            "text": "m",
                            "rawText": "m",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 19
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": true,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 21
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 28
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 29
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 13,
                "end": 29
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 31
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
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

