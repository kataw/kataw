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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
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
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 768,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 12,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 10,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 10,
                "end": 21
            },
            "flags": 128,
            "start": 6,
            "end": 21
        }
    ],
    "isModule": true,
    "text": "export let {...x} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

