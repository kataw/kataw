# Kataw parser test case

## Input

`````js
type x = a?.[b]
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
                "text": "x",
                "rawText": "x",
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
                "kind": 332,
                "optionalIndexedToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "objectType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 10
                },
                "indexType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 13,
                    "end": 14
                },
                "flags": 2097152,
                "start": 8,
                "end": 15
            },
            "flags": 2097152,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "type x = a?.[b]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

