# Kataw parser test case

## Input

`````js
[.../x/]
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
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 1,
                                "start": 0,
                                "end": 4
                            },
                            "argument": {
                                "kind": 221,
                                "text": "/x/",
                                "flags": 768,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "[.../x/]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
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

