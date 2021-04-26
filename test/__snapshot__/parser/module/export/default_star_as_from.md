# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export bar, * as foo from 'bar';
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 6,
                        "end": 10
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 11,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "as",
                            "rawText": "as",
                            "flags": 768,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 11,
                        "end": 16
                    }
                ],
                "flags": 256,
                "start": 6,
                "end": 16
            },
            "flags": 128,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 16,
                "end": 20
            },
            "flags": 128,
            "start": 16,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 768,
                "start": 20,
                "end": 25
            },
            "flags": 128,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "bar",
                "flags": 67109632,
                "start": 25,
                "end": 31
            },
            "flags": 128,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": true,
    "text": "export bar, * as foo from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 10
@{x2716}@ Expression expected - start: 11, end: 13

```

