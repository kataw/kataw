# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x = 1;
await x;
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
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 12,
                            "end": 18
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 18
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 6,
                "end": 19
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 25
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "export const x = 1;\nawait x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

export const x = 1;
await x;

```

### Diagnostics

```javascript
✔ No errors
```

