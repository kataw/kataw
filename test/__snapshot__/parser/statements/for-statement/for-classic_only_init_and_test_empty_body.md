# Kataw parser test case

## Input

`````js
for (a;b;);
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 5,
                "end": 6
            },
            "condition": null,
            "incrementor": {
                "kind": 81921,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 10,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "for (a;b;);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

