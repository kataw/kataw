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
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": {
                "kind": 259,
                "asteriskToken": {
                    "kind": 201360950,
                    "flags": 64,
                    "transformFlags": 32,
                    "start": 6,
                    "end": 8
                },
                "asKeyword": {
                    "kind": 16494,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "moduleExportName": null,
                "namedBinding": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            },
            "fromClause": {
                "kind": 325,
                "fromKeyword": null,
                "from": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 18,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "'bar'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 34
        }
    ],
    "isModule": true,
    "source": "export * as foo, {bar} from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16
✖ '; ' is not allowed here. Did you mean ';'? - start: 27, end: 33

```

