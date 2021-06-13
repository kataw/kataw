# Kataw parser test case

## Input

`````js
type A = Obj['a'];
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
                "text": "A",
                "rawText": "A",
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
                    "flags": 32,
                    "start": 8,
                    "end": 12
                },
                "indexType": {
                    "kind": 134217967,
                    "value": "a",
                    "flags": 96,
                    "start": 13,
                    "end": 16
                },
                "flags": 0,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type A = Obj['a'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

