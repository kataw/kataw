# Kataw parser test case

## Input

`````js
type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 164,
                    "end": 167
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 158,
                                "end": 161
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 152,
                                            "end": 155
                                        },
                                        "parameters": {
                                            "kind": 134234343,
                                            "flags": 64,
                                            "start": 118,
                                            "end": 151
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 155,
                                                "end": 157
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 155,
                                            "end": 157
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 157
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 161
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 161,
                                    "end": 163
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 161,
                                "end": 163
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 163
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 167
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 167,
                        "end": 169
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 167,
                    "end": 169
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 169
            },
            "flags": 16,
            "start": 0,
            "end": 170
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{[x]:string}][(((symbol[{[x]:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 170
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

