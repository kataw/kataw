# Kataw parser test case

## Input

`````js
for ({a: b.c} of d) e
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "right": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 6,
                                "end": 12
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 6,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 5,
                "end": 13
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "d",
                "rawText": "d",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 19,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for ({a: b.c} of d) e",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
for ({ a: b.c } of d) e;
```

### Diagnostics

```javascript
✔ No errors
```

