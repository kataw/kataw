# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: false }
`````

## Input

`````js
const f = async <T, R, S>(
  x: T,
  y: R,
  z: S,
) => {
  return null;
};
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "operatorToken": {
                                "kind": 536971330,
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "flags": 96,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 18
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "R",
                            "rawText": "R",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 19,
                        "end": 21
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "S",
                            "rawText": "S",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 22,
                        "end": 24
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 24
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
                    "start": 24,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 24,
                    "end": 25
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [],
                        "flags": 32,
                        "start": 25,
                        "end": 30
                    },
                    "flags": 25,
                    "start": 32,
                    "end": 30
                },
                "flags": 96,
                "start": 24,
                "end": 30
            },
            "flags": 16,
            "start": 24,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 97,
                        "start": 34,
                        "end": 38
                    }
                ],
                "flags": 32,
                "start": 31,
                "end": 38
            },
            "flags": 16,
            "start": 31,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "R",
                        "rawText": "R",
                        "flags": 96,
                        "start": 39,
                        "end": 41
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 97,
                        "start": 42,
                        "end": 46
                    }
                ],
                "flags": 32,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 39,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "S",
                        "rawText": "S",
                        "flags": 96,
                        "start": 47,
                        "end": 49
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 50,
                        "end": 50
                    }
                ],
                "flags": 32,
                "start": 47,
                "end": 50
            },
            "flags": 16,
            "start": 47,
            "end": 50
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 161,
                        "returnKeyword": {
                            "kind": 37757022,
                            "flags": 81,
                            "start": 57,
                            "end": 66
                        },
                        "expression": {
                            "kind": 138477575,
                            "flags": 96,
                            "start": 66,
                            "end": 71
                        },
                        "flags": 81,
                        "start": 57,
                        "end": 72
                    }
                ],
                "flags": 17,
                "start": 57,
                "end": 72
            },
            "flags": 16,
            "start": 55,
            "end": 74
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 74,
            "end": 75
        }
    ],
    "isModule": true,
    "source": "const f = async <T, R, S>(\n  x: T,\n  y: R,\n  z: S,\n) => {\n  return null;\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 21, end: 22
✖ Missing initializer in const declaration - start: 24, end: 25
✖ ',' expected - start: 24, end: 25
✖ Expected a `;` - start: 24, end: 25
✖ Expected a ')' to match the '(' token here - start: 30, end: 31
✖ Expected a `;` - start: 38, end: 39
✖ Expected a `;` - start: 46, end: 47
✖ Identifier expected - start: 50, end: 52
✖ Declaration or statement expected - start: 52, end: 55
✖ A return statement can only be used within a function_body - start: 57, end: 66

```

