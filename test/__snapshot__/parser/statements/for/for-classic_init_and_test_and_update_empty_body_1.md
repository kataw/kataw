# Kataw parser test case

## Input

`````js
for (a;b;c);
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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "original": "a",
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "condition": {
                "kind": 134299649,
                "original": "c",
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "incrementor": {
                "kind": 134299649,
                "original": "b",
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 11,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "for (a;b;c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

