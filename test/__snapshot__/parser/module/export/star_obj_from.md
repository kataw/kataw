# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export *, {bar} from 'bar';
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
                "namedBinding": null,
                "flags": 128,
                "start": 0,
                "end": 8
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
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
                            "start": 11,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 11,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 11,
                "end": 14
            },
            "flags": 128,
            "start": 9,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 768,
                "start": 15,
                "end": 20
            },
            "flags": 128,
            "start": 15,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "bar",
                "flags": 67109632,
                "start": 20,
                "end": 26
            },
            "flags": 128,
            "start": 20,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "export *, {bar} from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 9
✖ Statement expected - start: 8, end: 9

```

