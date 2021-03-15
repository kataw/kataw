# Kataw parser test case

## Input

`````js
declare class C {
    get<T>(): void;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare class C {\n    get<T>(): void;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "get",
                                "rawText": "get",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 25
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": {
                                "kind": 4202742,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 31,
                                "end": 36
                            },
                            "accessModifier": null,
                            "typeParameters": {
                                "kind": 134226153,
                                "typeParameterList": [
                                    {
                                        "kind": 134226152,
                                        "name": {
                                            "kind": 196711,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "constraint": null,
                                        "defaultType": null,
                                        "expression": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 26,
                                        "end": 27
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 27
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 25,
                            "end": 37
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 17,
                        "end": 37
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 17,
                "end": 39
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 1,
            "start": 7,
            "end": 39
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
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

