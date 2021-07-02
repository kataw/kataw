# Kataw parser test case

## Input

`````js
switch(x) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 11,
                "end": 11
            },
            "flags": 80,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "switch(x) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

switch (x) {
}

```

### Diagnostics

```javascript
✔ No errors
```

