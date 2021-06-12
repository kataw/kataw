# Kataw parser test case

## Input

`````js
type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;

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
                    "start": 82,
                    "end": 85
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 76,
                                "end": 79
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 70,
                                            "end": 73
                                        },
                                        "parameters": {
                                            "kind": 134234343,
                                            "flags": 64,
                                            "start": 36,
                                            "end": 69
                                        },
                                        "returnType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 73,
                                                "end": 75
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 73,
                                            "end": 75
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 11,
                                        "end": 75
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 79
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 81
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 79,
                                "end": 81
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 81
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 85
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 85,
                        "end": 87
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 85,
                    "end": 87
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 87
            },
            "flags": 16,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "type a = (((symbol[{a:string}][][][] | ((y & [((x) => T)]) => T) => T) => T) => T) => T;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

