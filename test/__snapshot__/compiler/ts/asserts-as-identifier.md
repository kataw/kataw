# Kataw parser test case

## Input

`````js
declare function assertIsString(value: unknown): asserts;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare function assertIsString(value: unknown): asserts;",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "assertIsString",
                "rawText": "assertIsString",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 16,
                "end": 31
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "value",
                            "rawText": "value",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 32,
                            "end": 37
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 4202738,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 46
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 32,
                        "end": 46
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 32,
                "end": 47
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "asserts",
                    "rawText": "asserts",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 56
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 48,
                "end": 57
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 7,
            "end": 57
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

