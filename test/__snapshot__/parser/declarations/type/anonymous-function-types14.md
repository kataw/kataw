# Kataw parser test case

## Input

`````js
type T = Array<(string) => number>
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
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 96,
                    "start": 8,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 26
                                },
                                "parameters": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "returnType": {
                                    "kind": 134234345,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 0,
                    "start": 14,
                    "end": 34
                },
                "flags": 0,
                "start": 8,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type T = Array<(string) => number>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

