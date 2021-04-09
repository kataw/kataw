# Kataw parser test case

## Input

`````js
for ("foo".bar in obj);
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
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 67174403,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 81921,
                    "value": "bar",
                    "autofix": 0,
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 14
            },
            "expression": {
                "kind": 81921,
                "value": "obj",
                "autofix": 0,
                "flags": 768,
                "start": 17,
                "end": 21
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 22,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (\"foo\".bar in obj);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

