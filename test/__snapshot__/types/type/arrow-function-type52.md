# Kataw parser test case

## Input

`````js
type a = (["string"]) => T;
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
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 147,
                                    "elementTypes": [
                                        {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217967,
                                                "text": "string",
                                                "rawText": "\"string\"",
                                                "flags": 2097216,
                                                "start": 11,
                                                "end": 19
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 21
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
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
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 26
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 26
                },
                "flags": 2097152,
                "start": 8,
                "end": 26
            },
            "flags": 64,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "type a = ([\"string\"]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  type a = ([["\"string\""]]) => T

```

### Diagnostics

```javascript
✔ No errors
```

