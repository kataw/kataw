# Kataw parser test case

## Input

`````js
for (456[x] in c) d;
`````

## Options

### Parser Options

`````js
{}
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 11,
                "end": 14
            },
            "kind": 166,
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 201392130,
                    "text": 456,
                    "rawText": "456",
                    "flags": 96,
                    "start": 5,
                    "end": 8
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 9,
                    "end": 10
                },
                "flags": 32,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 16,
                "start": 17,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (456[x] in c) d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

