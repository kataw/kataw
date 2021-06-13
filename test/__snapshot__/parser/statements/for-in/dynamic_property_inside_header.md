# Kataw parser test case

## Input

`````js
for (x[a in b] in y);
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 536871042,
                "member": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 8,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 13
                },
                "flags": 32,
                "start": 5,
                "end": 14
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 14,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 21
            },
            "flags": 80,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for (x[a in b] in y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

for ( in y);
```

### Diagnostics

```javascript
✔ No errors
```

