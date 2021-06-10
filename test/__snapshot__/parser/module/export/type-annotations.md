# Kataw parser test case

## Input

`````js
export type { foo1 };
export type { bar } from "bar";
export type * from "foo";
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
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
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 6,
                    "end": 11
                },
                "flags": 16,
                "start": 6,
                "end": 11
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo1",
                            "rawText": "foo1",
                            "flags": 96,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 13,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "start": 11,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 20,
            "end": 21
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 21,
                "end": 28
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 28,
                    "end": 33
                },
                "flags": 16,
                "start": 28,
                "end": 33
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 21,
            "end": 33
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 35,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 35,
                "end": 39
            },
            "flags": 16,
            "start": 33,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 41,
                "end": 46
            },
            "flags": 16,
            "start": 41,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 96,
                "start": 46,
                "end": 52
            },
            "flags": 16,
            "start": 46,
            "end": 53
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 53,
                "end": 60
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "type",
                        "rawText": "type",
                        "flags": 96,
                        "start": 60,
                        "end": 65
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 65,
                        "end": 67
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "from",
                        "rawText": "from",
                        "flags": 96,
                        "start": 67,
                        "end": 72
                    },
                    "flags": 32,
                    "start": 60,
                    "end": 72
                },
                "flags": 16,
                "start": 60,
                "end": 72
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 53,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "\"foo\"",
                "flags": 96,
                "start": 72,
                "end": 78
            },
            "flags": 16,
            "start": 72,
            "end": 79
        }
    ],
    "isModule": true,
    "source": "export type { foo1 };\nexport type { bar } from \"bar\";\nexport type * from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 11, end: 13
✖ Declaration or statement expected - start: 11, end: 13
✖ Expected a `;` - start: 33, end: 35
✖ Declaration or statement expected - start: 33, end: 35
✖ Expected a `;` - start: 46, end: 52
✖ Expected a `;` - start: 72, end: 78
✖ Declaration or statement expected - start: 72, end: 78

```

