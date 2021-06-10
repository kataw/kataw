# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let {...x} = y
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
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 80,
                    "start": 6,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": null,
                                            "flags": 0,
                                            "start": 12,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 21
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 21
                },
                "flags": 33554448,
                "start": 6,
                "end": 21
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "export let {...x} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

export let {
  ...x
} = y;
```

### Diagnostics

```javascript
✔ No errors
```

