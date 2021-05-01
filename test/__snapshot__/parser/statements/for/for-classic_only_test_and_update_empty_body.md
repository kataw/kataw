# Kataw parser test case

## Input

`````js
for (;b;c);
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
            "initializer": null,
            "condition": {
                "kind": 134299649,
                "original": "c",
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 8,
                "end": 9
            },
            "incrementor": {
                "kind": 134299649,
                "original": "b",
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 10,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "for (;b;c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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

