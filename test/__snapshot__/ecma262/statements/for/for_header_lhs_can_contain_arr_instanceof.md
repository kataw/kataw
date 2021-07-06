# Kataw parser test case

## Input

`````js
for ([] instanceof obj;;);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 26
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for ([] instanceof obj;;);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

for ([] instanceof obj; ; );
```

### Diagnostics

```javascript
✔ No errors
```

