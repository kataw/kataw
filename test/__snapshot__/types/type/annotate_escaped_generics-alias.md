# Kataw parser test case

## Input

`````js
type Tr = <Return>(() => Pr<Return>) => Return;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "Tr",
                "rawText": "Tr",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": {
                        "kind": 307,
                        "declarations": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "Return",
                                    "rawText": "Return",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 17
                                },
                                "type": null,
                                "assignToken": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 11,
                        "end": 17
                    },
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
                    },
                    "arrowToken": null,
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 288,
                            "typeParameters": null,
                            "arrowTypeParameterList": {
                                "kind": 292,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 20
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 24
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Pr",
                                        "rawText": "Pr",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "Return",
                                                        "rawText": "Return",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 34
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 34
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 35
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 35
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 35
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 35
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 35
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 9,
                "end": 35
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Return",
                "rawText": "Return",
                "flags": 96,
                "transformFlags": 0,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "type Tr = <Return>(() => Pr<Return>) => Return;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ')' is not allowed here. Did you mean ';'? - start: 35, end: 36
✖ Declaration or statement expected - start: 36, end: 39

```

