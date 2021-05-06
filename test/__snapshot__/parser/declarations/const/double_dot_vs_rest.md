# Kataw parser test case

## Input

`````js
const [..x] = obj;
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
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 7
            },
            "flags": 33554448,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 9,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 13,
                "end": 17
            },
            "flags": 16,
            "start": 13,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "const [..x] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

const [];
x;
obj;
```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 7, end: 8
✖ Missing initializer in const declaration - start: 7, end: 8
✖ ',' expected - start: 7, end: 8
✖ Declaration or statement expected - start: 8, end: 9
✖ Expected a `;` - start: 10, end: 11
✖ Declaration or statement expected - start: 11, end: 13

```

