# Kataw parser test case

## Input

`````js
type o = { m(|int|bool): void }
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
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "o",
                "rawText": "o",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "m",
                            "rawText": "m",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "parameters": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": null,
                                        "optionalToken": null,
                                        "types": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "int",
                                                        "rawText": "int",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 17
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 14,
                                                    "end": 17
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 22
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 0,
                                            "start": 17,
                                            "end": 22
                                        },
                                        "flags": 0,
                                        "start": 13,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 13,
                                "end": 22
                            },
                            "returnType": {
                                "kind": 138477615,
                                "flags": 64,
                                "start": 24,
                                "end": 29
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 12,
                            "end": 29
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "type o = { m(|int|bool): void }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

