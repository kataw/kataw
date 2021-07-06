# Kataw parser test case

## Input

`````js
#!foo // hashbang comment

[,,,]
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
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 28
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 29
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 30
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 25,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "#!foo // hashbang comment\n\n[,,,]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

[, , ];
```

### Diagnostics

```javascript
✔ No errors
```

