# Kataw parser test case

## Input

`````js
opaque Ident: Type = SuperType;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 134299649,
                "text": "opaque",
                "rawText": "opaque",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "Ident",
                "rawText": "Ident",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "Type",
                        "rawText": "Type",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "SuperType",
                        "rawText": "SuperType",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 30
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 13,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 13,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 6,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "opaque Ident: Type = SuperType;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 6, end: 12

```

