# Kataw parser test case

## Input

`````js
declare var C: Class<string>;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Class",
                                    "rawText": "Class",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 20,
                                    "end": 28
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 28
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 28
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 11,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 28
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "declare var C: Class<string>;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
declare var C: Class<string>;
```

### Diagnostics

```javascript
✔ No errors
```

