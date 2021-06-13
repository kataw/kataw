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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
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
                        "flags": 96,
                        "start": 6,
                        "end": 10
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 11,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "as",
                            "rawText": "as",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 16
            },
            "flags": 16,
            "start": 6,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "flags": 16,
            "start": 16,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "'bar'",
                "flags": 4194400,
                "start": 25,
                "end": 31
            },
            "flags": 16,
            "start": 25,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "export bar, * as foo from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 6, end: 10
✖ Identifier expected - start: 11, end: 13
✖ Expected a `;` - start: 16, end: 20
✖ Expected a `;` - start: 20, end: 25
✖ Expected a `;` - start: 25, end: 31

```

