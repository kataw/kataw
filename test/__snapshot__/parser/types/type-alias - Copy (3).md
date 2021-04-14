# Kataw parser test case

## Input

`````js
type x = y;
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
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 8,
                    "end": 10
                },
                "typeParameters": null,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "flags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "type x = y;",
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

