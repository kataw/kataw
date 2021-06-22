# Kataw parser test case

## Input

`````js
a /*1*/ ?


      /*1*/ b /*2*/: /*3*/c

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
                    "end": 9
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 9,
                    "end": 25
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 25,
                    "end": 32
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 32,
                    "end": 39
                },
                "flags": 32,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "a /*1*/ ?\n\n\n      /*1*/ b /*2*/: /*3*/c\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

a /*1*/ ? /*1*/ b /*2*/ : c;
```

### Diagnostics

```javascript
✔ No errors
```

