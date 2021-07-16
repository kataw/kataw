# Kataw parser test case

## Input

`````js
for ({}.b in c) d;
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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "flags": 48,
                "transformFlags": 2,
                "start": 0,
                "end": 9
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 9,
                "end": 12
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 15,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for ({}.b in c) d;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
for ({}.b in c) d;
```

### Diagnostics

```javascript
✔ No errors
```

