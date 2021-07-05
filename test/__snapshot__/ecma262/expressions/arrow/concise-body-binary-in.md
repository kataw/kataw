# Kataw parser test case

## Input

`````js
const t = () => ({
  v: (v) => v in z
})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 11,
                                "end": 11
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 12,
                                "end": 15
                            },
                            "contents": {
                                "kind": 121,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "v",
                                                    "rawText": "v",
                                                    "flags": 97,
                                                    "start": 18,
                                                    "end": 22
                                                },
                                                "right": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 96,
                                                                "start": 25,
                                                                "end": 26
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 27,
                                                        "end": 30
                                                    },
                                                    "contents": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "v",
                                                            "rawText": "v",
                                                            "flags": 96,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 96,
                                                            "start": 32,
                                                            "end": 35
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "z",
                                                            "rawText": "z",
                                                            "flags": 96,
                                                            "start": 35,
                                                            "end": 37
                                                        },
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 37
                                                    },
                                                    "flags": 32,
                                                    "start": 23,
                                                    "end": 37
                                                },
                                                "flags": 33,
                                                "start": 18,
                                                "end": 37
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "start": 18,
                                        "end": 37
                                    },
                                    "flags": 49,
                                    "start": 17,
                                    "end": 39
                                },
                                "flags": 15,
                                "start": 34,
                                "end": 40
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 40
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 40
            },
            "flags": 33554448,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "const t = () => ({\n  v: (v) => v in z\n})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

const t = () =>  ({ v: (v) =>  v in  z });
```

### Diagnostics

```javascript
✔ No errors
```

