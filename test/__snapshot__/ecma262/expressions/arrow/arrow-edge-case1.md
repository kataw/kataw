# Kataw parser test case

## Input

`````js
a ? (b) : c => d;
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
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 3,
                    "start": 32,
                    "end": 7
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 11,
                        "end": 14
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 16
                },
                "flags": 96,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "a ? (b) : c => d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

a ? (b) : c => d;
```

### Diagnostics

```javascript
✔ No errors
```

