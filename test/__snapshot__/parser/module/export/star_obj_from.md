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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": {
                "kind": 259,
                "asteriskToken": {
                    "kind": 67143222,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "asKeyword": null,
                "moduleExportName": null,
                "namedBinding": null,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": null,
                "from": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 11,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 15
                },
                "flags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "'bar'",
                "flags": 4194400,
                "start": 20,
                "end": 26
            },
            "flags": 16,
            "start": 20,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "export *, {bar} from 'bar';",
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
✖ Expected a `;` - start: 15, end: 20
✖ Expected a `;` - start: 20, end: 26

```

