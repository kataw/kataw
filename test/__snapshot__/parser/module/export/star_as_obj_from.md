# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export * as foo, {bar} from 'bar';
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
            "exportFromClause": {
                "kind": 259,
                "moduleExportName": null,
                "namedBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 11,
                    "end": 15
                },
                "autofix": 0,
                "flags": 128,
                "start": 0,
                "end": 15
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 15,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 15
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 768,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 18,
                        "end": 21
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 18,
                "end": 21
            },
            "flags": 128,
            "start": 16,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 768,
                "start": 22,
                "end": 27
            },
            "flags": 128,
            "start": 22,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "bar",
                "flags": 67109632,
                "start": 27,
                "end": 33
            },
            "flags": 128,
            "start": 27,
            "end": 34
        }
    ],
    "isModule": true,
    "text": "export * as foo, {bar} from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 15, end: 16
@{x2716}@ Statement expected - start: 15, end: 16

```

