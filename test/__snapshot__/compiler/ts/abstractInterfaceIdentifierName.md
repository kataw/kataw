# Kataw parser test case

## Input

`````js
interface abstract {
    abstract(): void;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface abstract {\n    abstract(): void;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "abstract",
                "rawText": "abstract",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 18
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
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 33
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [],
                            "trailingcomma": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 34,
                            "end": 34
                        },
                        "returnType": {
                            "kind": 4202742,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 36,
                            "end": 41
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 20,
                        "end": 42
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 20,
                "end": 42
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 44
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
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

