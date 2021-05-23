# Kataw parser test case

## Input

`````js
type E = Obj['bar'][];
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
                "text": "E",
                "rawText": "E",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 136,
                "type": {
                    "kind": 268,
                    "objectType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Obj",
                            "rawText": "Obj",
                            "flags": 96,
                            "start": 8,
                            "end": 12
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "indexType": {
                        "kind": 134217967,
                        "value": "bar",
                        "flags": 0,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 0,
                    "start": 13,
                    "end": 20
                },
                "flags": 0,
                "start": 20,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "type E = Obj['bar'][];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

