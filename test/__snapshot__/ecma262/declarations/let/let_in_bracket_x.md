# Kataw parser test case

## Input

`````js
let[x] in x;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 5
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 6
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 6
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "let[x] in x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 6, end: 9
✖ 'in' is not allowed here. Did you mean ';'? - start: 6, end: 9

```

