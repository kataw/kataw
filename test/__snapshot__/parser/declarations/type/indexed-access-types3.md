# Kataw parser test case

## Input

`````js
type D = (Obj['bar'])['baz'];
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
                "text": "D",
                "rawText": "D",
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
                "kind": 311,
                "objectType": {
                    "kind": 290,
                    "type": {
                        "kind": 311,
                        "objectType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Obj",
                                "rawText": "Obj",
                                "flags": 96,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 13
                        },
                        "indexType": {
                            "kind": 134217967,
                            "text": "bar",
                            "flags": 2097216,
                            "start": 14,
                            "end": 19
                        },
                        "flags": 2097152,
                        "start": 14,
                        "end": 21
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 21
                },
                "indexType": {
                    "kind": 134217967,
                    "text": "baz",
                    "flags": 2097216,
                    "start": 22,
                    "end": 27
                },
                "flags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 2097152,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type D = (Obj['bar'])['baz'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

