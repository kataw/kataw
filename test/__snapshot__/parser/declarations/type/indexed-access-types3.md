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
            "type": {
                "kind": 268,
                "objectType": {
                    "kind": 260,
                    "type": {
                        "kind": 144,
                        "id": {
                            "kind": 268,
                            "objectType": {
                                "kind": 134299649,
                                "text": "Obj",
                                "rawText": "Obj",
                                "flags": 96,
                                "start": 10,
                                "end": 13
                            },
                            "indexType": {
                                "kind": 134217967,
                                "value": "bar",
                                "flags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 21
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 8,
                        "end": 20
                    },
                    "flags": 0,
                    "start": 8,
                    "end": 21
                },
                "indexType": {
                    "kind": 134217967,
                    "value": "baz",
                    "flags": 0,
                    "start": 22,
                    "end": 27
                },
                "flags": 0,
                "start": 22,
                "end": 29
            },
            "flags": 16,
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

