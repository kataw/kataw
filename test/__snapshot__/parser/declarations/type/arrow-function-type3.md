# Kataw parser test case

## Input

`````js
type X = (x) => T;
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
                "text": "X",
                "rawText": "X",
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
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 12,
                    "end": 15
                },
                "parameters": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 10,
                        "end": 11
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 11
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 15,
                    "end": 17
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 17
            },
            "flags": 2097152,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type X = (x) => T;",
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

